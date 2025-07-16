import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validar los campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Crear el transportador de email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // Configurar el email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'costasandres01@gmail.com', // Tu email donde recibirás los mensajes
      subject: `Nuevo mensaje de ${name} desde tu portfolio`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    }

    // Enviar el email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error enviando email:', error)
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    )
  }
} 