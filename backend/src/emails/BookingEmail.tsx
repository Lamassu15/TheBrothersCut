import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Img,
  Heading,
  Text,
  Tailwind,
  Preview,
  Hr,
  Link,
} from "@react-email/components";
import React from "react";
import { address } from "../constans";

interface EmailProps {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

export default function Email({
  firstName,
  lastName,
  email,
  service,
  date,
  time,
  message,
}: EmailProps) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: "#E6E8EA",
              secondary: "#001524",
              accent: "#FF6B35",
              fonts: "#F4F4F4",
            },
          },
        },
      }}
    >
      <Html>
        <Preview>New booking reuest</Preview>
        <Head />
        <title>Booking request</title>
        <Body className="bg-primary text-fonts font-sans">
          <Container className="bg-secondary max-w-3xl mx-auto p-8 rounded-lg shadow-2xl">
            <Heading as="h1" className="text-center">
              Ther Brothers Cut
            </Heading>
            <Section>
              <Heading as="h3" className="text-accent mb-6 text-center">
                Request for booking a service at The Brothers Cut
              </Heading>
              <Text className="text-base">
                Dear&nbsp;
                <strong className="text-accent">
                  {firstName} {lastName}
                </strong>
                ,
                <div>
                  We have received your request and will process it shortly.
                </div>
              </Text>
              <Text className="text-base">
                Services: <strong className="text-accent">{service}</strong>,
                &nbsp;{date} at {time}.
              </Text>
              <Text>
                <div>We look forward to seeing you soon, {address}</div>
              </Text>
              <Text className="text-base">
                <strong className="text-accent">Message:</strong> {message}
              </Text>
              <Text>
                For cancellations or changes, contact us by phone number{" "}
                <Link className="underline" href="tel:+61 469 874 644">+61 469 874 644</Link>
              </Text>
              <Hr></Hr>
              <Section className="text-center">
                <table className="w-full">
                  <tr>
                    <td align="center">
                      <Row className="table-cell h-[44px] w-[56px] align-bottom">
                        <Column className="pr-[8px]">
                          <Link href="#">
                            <Img
                              alt="Facebook"
                              height="36"
                              src="https://react.email/static/facebook-logo.png"
                              width="36"
                            />
                          </Link>
                        </Column>
                        <Column className="pr-[8px]">
                          <Link href="#">
                            <Img
                              alt="X"
                              height="36"
                              src="https://react.email/static/x-logo.png"
                              width="36"
                            />
                          </Link>
                        </Column>
                        <Column>
                          <Link href="#">
                            <Img
                              alt="Instagram"
                              height="36"
                              src="https://react.email/static/instagram-logo.png"
                              width="36"
                            />
                          </Link>
                        </Column>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">
                      <Text className="font-semibold text-gray-500">
                        {address}
                      </Text>
                      <Text className="text-sm text-gray-400">
                        If you have any questions, feel free to contact us at
                        thebrotherscut@gmail.com.
                      </Text>
                    </td>
                  </tr>
                </table>
              </Section>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
