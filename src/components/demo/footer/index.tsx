import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
import Image from "next/image";
import React, { CSSProperties } from "react";

export const Footer: React.FC = () => {
  const iconStyle: CSSProperties = {
    fontSize: 22,
    color: "#fff",
  };
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        color: "#fff",
        textAlign: "center",
        paddingTop: 32,
        paddingBottom: 32,
      }}
    >
      <Space direction="vertical" size="large">
        <Image
          src="/icons/pankod-icon.svg"
          alt="pankod"
          width="140"
          height="28"
        />
        <Space align="center" size="middle">
          <a href="https://github.com/pankod" target="_blank" style={iconStyle}>
            <GithubOutlined />
          </a>
          <a
            href="https://twitter.com/PankodDev"
            target="_blank"
            style={iconStyle}
          >
            <TwitterOutlined />
          </a>
          <a
            href="https://www.youtube.com/channel/UCBGOeQkv1XW3ptryLWlQbAQ"
            target="_blank"
            style={iconStyle}
          >
            <YoutubeOutlined />
          </a>
          <a
            href="https://www.linkedin.com/company/pankod-yazilim-ve-danismanlik/"
            target="_blank"
            style={iconStyle}
          >
            <LinkedinOutlined />
          </a>
        </Space>
      </Space>
    </div>
  );
};
