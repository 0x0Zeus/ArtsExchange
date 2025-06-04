import { basic_url } from "@/stack/stack";
import { Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import {} from "react-icons";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const ContactUs = () => {
  const handleSendBtn = () => {
    console.log("ClickSendButton");
  };

  const onFinish = (value: any) => {
    console.log(value.user, value.email, value.message);

    axios
      .post(
        `${basic_url}contact_us/${value.user}/${value.email}/${value.message}`,
      )
      .then(() => {
        message.success("Left Message Successfully.");
      })
      .catch(() => message.error("Network Error"));
  };

  return (
    <>
      <div className="contactus-bg rounded-b-3xl bg-[#0f0f0f]">
        <div className="container mx-auto">
          <h1 className="px-4 py-[40px] mt-[84px] md:py-[88px] font-inter text-[32px] md:text-[56px] font-bold leading-[40px] md:leading-[64px] text-white">
            Get In Touch
          </h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid gap-6 px-4 md:px-16 py-[40px] md:py-[102px] md:grid-cols-2">
          <div className="rounded-xl bg-white px-6 md:px-[44px] py-8 md:py-12 flex flex-col gap-8 md:gap-0 md:justify-between">
            <div className="flex items-center gap-4 md:gap-7">
              <div className="h-[50px] w-[50px] md:h-[68px] md:w-[68px] shrink-0 content-center rounded-full border border-[#ffffff]/40 bg-[#050520] text-center">
                <img
                  src="/icons/phone.png"
                  className="mx-auto w-5 md:w-7"
                  alt="phone"
                />
              </div>
              <div className="text-left text-[#000000]/80">
                <p className="text-xl md:text-2xl leading-[32px] md:leading-[48px]">Phone</p>
                <p className="text-lg md:text-xl leading-[24px] md:leading-[32px]">+1 234 567 8900</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-7">
              <div className="h-[50px] w-[50px] md:h-[68px] md:w-[68px] shrink-0 content-center rounded-full border border-[#ffffff]/40 bg-[#050520] text-center">
                <img
                  src="/icons/company.png"
                  className="mx-auto w-5 md:w-7"
                  alt="Company"
                />
              </div>
              <div className="text-left text-[#000000]/80">
                <p className="text-xl md:text-2xl leading-[32px] md:leading-[48px]">Company</p>
                <p className="text-lg md:text-xl leading-[24px] md:leading-[32px]">VV, LLC Company</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-7">
              <div className="h-[50px] w-[50px] md:h-[68px] md:w-[68px] shrink-0 content-center rounded-full border border-[#ffffff]/40 bg-[#050520] text-center">
                <img src="/icons/map.png" className="mx-auto w-5 md:w-7" alt="map" />
              </div>
              <div className="text-left text-[#000000]/80">
                <p className="text-xl md:text-2xl leading-[32px] md:leading-[48px]">Address</p>
                <p className="text-lg md:text-xl leading-[24px] md:leading-[32px]">
                  90 Richmond Hill road, 1M S.I, New York 10314
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6 rounded-xl bg-white p-4 md:p-6 font-spaceGrotesk text-[#0f0f0f]">
            <div className="">
              <h1 className="text-xl md:text-2xl font-medium text-[#0f0f0f]">
                Contact Us
              </h1>
            </div>
            <Form
              name="nest-messages"
              layout="vertical"
              labelWrap
              colon={false}
              onFinish={onFinish}
              className=""
              validateMessages={validateMessages}
            >
              <div className="flex w-full flex-col gap-4">
                <Form.Item
                  name={["user"]}
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#0f0f0f",
                        fontWeight: "600",
                        lineHeight: "20px",
                      }}
                    >
                      Name
                    </p>
                  }
                  rules={[{ required: true }]}
                  style={{ width: "100%" }}
                >
                  <Input
                    size="large"
                    placeholder="Full name"
                    className="h-12 rounded-lg border border-[#e0e0e0] bg-white"
                  />
                </Form.Item>
                <Form.Item
                  name={["email"]}
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#0f0f0f",
                        fontWeight: "600",
                        lineHeight: "20px",
                      }}
                    >
                      Email
                    </p>
                  }
                  rules={[{ type: "email", required: true }]}
                  style={{ width: "100%" }}
                >
                  <Input
                    size="large"
                    placeholder="Your email"
                    className="h-12 rounded-lg border border-[#e0e0e0] bg-white"
                  />
                </Form.Item>
              </div>
              <Form.Item
                name={["message"]}
                style={{ width: "100%" }}
                label={
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#0f0f0f",
                      fontWeight: "600",
                      lineHeight: "20px",
                    }}
                  >
                    Message
                  </p>
                }
                rules={[{ required: true }]}
              >
                <TextArea
                  style={{ height: 120 }}
                  placeholder="Please enter your message ..."
                  className="rounded-lg border border-[#e0e0e0] bg-white"
                ></TextArea>
              </Form.Item>
              <Form.Item>
                <button
                  type="submit"
                  className="w-full md:w-auto min-w-[160px] bg-[#0f0f0f] bg-gradient-to-b from-[#ffffff]/12 to-[#ffffff00] border border-[#363636] rounded-lg h-12 text-base text-white"
                  onClick={handleSendBtn}
                >
                  Send
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
