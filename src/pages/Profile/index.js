import React from "react";
import { Link } from "react-router-dom";
import {
  Main,
  BreadCrumb,
  Content,
  ProfileSection,
  ButtonWrapper,
  ItemButton,
} from "./style";

import { Layout, Header } from "../../components";

import MyProfile from "../../assets/content/my-profile.png";

function urlB64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const subscribe = () => {
  const key =
    "BE4XluV7cBuMfY7jsxF_eW9Zc3Lcbiv2awcx1uRXc_9eS-NFcRtzGFbsgqZOXdK90OmSvXqWRl4Nk5ivGCiqoDo";
  try {
    const sub = global.registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlB64ToUint8Array(key),
    });
    console.log(" subscribe.");
  } catch (error) {
    console.log("cannot subscribe.");
  }
};
const Profile = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <BreadCrumb>
          <Link to="/">Home</Link>/<Link to="/profile">My Profile</Link>
        </BreadCrumb>
        <Content>
          <ProfileSection>
            <img src={MyProfile} alt="image profile" />
            <h5>Masayoshi Angga</h5>
            <p>Jr.Website Developer</p>
          </ProfileSection>
          <ButtonWrapper>
            <ItemButton>
              <h4>Suscribe to Notification</h4>
              <h4>Subscribe</h4>
            </ItemButton>
            <ItemButton>
              <h4 onClick={subscribe}>Test Notification</h4>
              <h4>Push Now</h4>
            </ItemButton>
          </ButtonWrapper>
        </Content>
        <h2>Hello from Profile</h2>
      </Main>
    </Layout>
  );
};

export default Profile;
