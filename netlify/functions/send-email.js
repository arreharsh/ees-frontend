import nodemailer from "nodemailer";

export async function handler(event) {
  
  const headers = {
    "Access-Control-Allow-Origin": "https://www.easyelectrical.in",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

 
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { type, ...data } = JSON.parse(event.body);

    if (!type) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Form type is required" }),
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let subject = "";
    let html = "";

    if (type === "callback") {
      subject = "📞 New Callback Request";
      html = `
        <h2>New Callback Request</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Preferred Time:</b> ${data.time}</p>
      `;
    }

    if (type === "quote") {
      subject = "💰 New Quote Request";
      html = `
        <h2>New Quote Request</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Requirement:</b> ${data.requirement}</p>
        <p><b>Message:</b> ${data.message}</p>
      `;
    }

    await transporter.sendMail({
      from: `"Website Lead" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject,
      html,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully",
      }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
}
