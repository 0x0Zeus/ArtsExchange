import { basic_url } from "@/stack/stack";
import { Form, Input, message } from "antd";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Subscribe = () => {
  const onFinish = (value: any) => {
    if (value.email !== undefined) {
      axios
        .post(`${basic_url}subscribers/subscribe_email/${value.email}`)
        .then(() => {
          message.success("Subscribed your email successfully.");
        })
        .catch((err) => {
          message.error(err.response.data.error);
        });
    }
  };

  return (
    <>
      <div className="subscribe-bg font-spaceGrotesk">
        <div className="container mx-auto">
          <div className="mx-auto max-w-[640px] space-y-6 px-4 py-[80px] text-center md:px-0">
            
            <h1 className="text-3xl font-black text-[#FFFFFF]/80 md:text-5xl">
              Subscribe to Trade Arts
            </h1>
            <p className="text-lg text-[#FFFFFF]/60 md:text-xl">
              Sign up to our newsletter to receive timely market updates and
              information on product sales and giveaways.
            </p>
            <Form
              name="nest-messages"
              layout="horizontal"
              labelWrap
              colon={false}
              onFinish={onFinish}
              style={{ maxWidth: 600, margin: "0 auto", marginTop: "36px" }}
              className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-5"
              validateMessages={validateMessages}
            >
              <Form.Item>
                <div className="rounded-lg border border-[#d0d0d0] bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF00] p-[1px]">
                  <button
                    type="submit"
                    className="h-[46px] min-w-[160px] rounded-[7px] bg-gradient-to-t from-[#d7d7d7] to-[#f6f6f6] text-base text-[#0f0f0f] flex items-center justify-center gap-3 font-medium"
                    onClick={onFinish}
                  >
                    Subscribe
                    <FaArrowRight />
                  </button>
                </div>
              </Form.Item>
              <Form.Item
                name={["email"]}
                rules={[{ type: "email", required: true }]}
              >
                <Input
                  size="large"
                  className="h-12 min-w-[280px] rounded-lg border border-[#FFFFFF]/20 bg-[#FFFFFF08] text-base text-[#FFFFFF] placeholder:text-[#FFFFFF]/60"
                  placeholder="Email..."
                />
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
