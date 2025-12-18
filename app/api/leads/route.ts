import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { PRIMARY_EMAIL, FALLBACK_EMAIL, COMPANY_NAME } from "@/lib/company"

// NOTE: Requires RESEND_API_KEY environment variable to be set
// Get your API key from https://resend.com
const resend = new Resend(process.env.RESEND_API_KEY)

interface LeadData {
  name: string
  email?: string
  phone?: string
  postcode: string
  message?: string
  description?: string
  leadSource: string
  pagePath?: string
  jobType?: string
  budget?: string
  timeline?: string
  enquiryType?: string
  organization?: string
  serviceType?: string
  propertyCount?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json()

    // Validate required fields
    if (!data.name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }

    if (!data.email && !data.phone) {
      return NextResponse.json({ error: "Email or phone is required" }, { status: 400 })
    }

    if (!data.postcode) {
      return NextResponse.json({ error: "Postcode is required" }, { status: 400 })
    }

    if (!data.leadSource) {
      return NextResponse.json({ error: "Lead source is required" }, { status: 400 })
    }

    const messageContent = data.message || data.description || "No message provided"

    // Build email content
    const emailHtml = `
      <h2>New Lead from ${COMPANY_NAME} Website</h2>
      <hr />
      <h3>Lead Details</h3>
      <p><strong>Lead Source:</strong> ${data.leadSource}</p>
      ${data.pagePath ? `<p><strong>Page URL:</strong> ${data.pagePath}</p>` : ""}
      ${data.enquiryType ? `<p><strong>Enquiry Type:</strong> ${data.enquiryType}</p>` : ""}
      ${data.jobType ? `<p><strong>Job Type:</strong> ${data.jobType}</p>` : ""}
      ${data.serviceType ? `<p><strong>Service Type:</strong> ${data.serviceType}</p>` : ""}
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      ${data.organization ? `<p><strong>Organization:</strong> ${data.organization}</p>` : ""}
      ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ""}
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
      <p><strong>Postcode:</strong> ${data.postcode}</p>
      
      ${
        data.budget || data.timeline
          ? `
      <h3>Project Details</h3>
      ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ""}
      ${data.timeline ? `<p><strong>Timeline:</strong> ${data.timeline}</p>` : ""}
      ${data.propertyCount ? `<p><strong>Number of Properties:</strong> ${data.propertyCount}</p>` : ""}
      `
          : ""
      }
      
      <h3>Message</h3>
      <p>${messageContent.replace(/\n/g, "<br />")}</p>
      
      <hr />
      <p style="color: #666; font-size: 12px;">This lead was submitted via the ${COMPANY_NAME} website.</p>
    `

    const emailText = `
New Lead from ${COMPANY_NAME} Website
=====================================

Lead Source: ${data.leadSource}
${data.pagePath ? `Page URL: ${data.pagePath}` : ""}
${data.enquiryType ? `Enquiry Type: ${data.enquiryType}` : ""}
${data.jobType ? `Job Type: ${data.jobType}` : ""}
${data.serviceType ? `Service Type: ${data.serviceType}` : ""}

Contact Information
-------------------
Name: ${data.name}
${data.organization ? `Organization: ${data.organization}` : ""}
${data.email ? `Email: ${data.email}` : ""}
${data.phone ? `Phone: ${data.phone}` : ""}
Postcode: ${data.postcode}

${
  data.budget || data.timeline
    ? `
Project Details
---------------
${data.budget ? `Budget: ${data.budget}` : ""}
${data.timeline ? `Timeline: ${data.timeline}` : ""}
${data.propertyCount ? `Number of Properties: ${data.propertyCount}` : ""}
`
    : ""
}

Message
-------
${messageContent}
    `.trim()

    // Send email using Resend
    // NOTE: If RESEND_API_KEY is not set, this will fail gracefully
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: `${COMPANY_NAME} Website <onboarding@resend.dev>`, // Use verified domain in production
        to: PRIMARY_EMAIL,
        cc: FALLBACK_EMAIL,
        replyTo: data.email || PRIMARY_EMAIL,
        subject: `New ${data.leadSource} Lead: ${data.name} - ${data.postcode}`,
        html: emailHtml,
        text: emailText,
      })
    } else {
      // Log to console if no API key (development mode)
      console.log("[v0] Lead received (no RESEND_API_KEY set):", data)
    }

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully",
    })
  } catch (error) {
    console.error("[v0] Error processing lead:", error)
    return NextResponse.json({ error: "Failed to process lead submission" }, { status: 500 })
  }
}
