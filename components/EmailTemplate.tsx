import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

export const ContactResponseEmail = () => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>
        Thanks for getting in touch, I’ll get back to you
        soon!
      </Preview>
      <Container style={container}>
        <Section style={box}>
          <Hr style={hr} />
          <Text style={paragraph}>
            Hey there! 👋 Thank you for reaching out through
            my website. I truly appreciate your interest in
            my services.
          </Text>
          <Text style={paragraph}>
            I offer professional help in three areas:
          </Text>
          <ul style={{ ...paragraph, paddingLeft: '20px' }}>
            <li>🌐 Web Development (Frontend & Backend)</li>
            <li>
              📚 1-on-1 Private Tutoring (Coding, Math,
              etc.)
            </li>
            <li>
              🗣️ English Coaching (IELTS, conversation,
              writing)
            </li>
          </ul>
          <Text style={paragraph}>
            I’ll review your message and respond within 1-2
            business days. If it&#39;s urgent, you’re
            welcome to reply directly.
          </Text>
          <Button
            style={button}
            href='mailto:anh487303@gmail.com'
          >
            Reply to this Email
          </Button>
          <Hr style={hr} />
          <Text style={paragraph}>
            Looking forward to chatting with you soon!
          </Text>
          <Text style={paragraph}>— Anh Nguyen</Text>
          <Hr style={hr} />
          <Text style={footer}>
            Anh Nguyen • Web Developer | Private Tutor |
            English Coach
            <br />
            Based in Vietnam — Available Online
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default ContactResponseEmail

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
}

const box = {
  padding: '0 48px',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
}

const paragraph = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
}

const button = {
  backgroundColor: 'oklch(0.8542 0.0517 199.29)',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '10px',
}

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  textAlign: 'center' as const,
}
