import type { GitHubUser } from "../types/user.ts";
import Header from "../components/Header/Header.tsx";
import Divider from "../components/Divider/Divider.tsx";
import About from "../components/About/About.tsx";
import LastProjects from "../components/LastProjects/LastProjects.tsx";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector.tsx";
import Contacts from "../components/Contacts/Contacts.tsx";
import Footer from "../components/Footer/Footer.tsx";

interface Props {
  user: GitHubUser;
  username: string;
}

export default function Home({ user, username }: Props) {
  return (
    <>
      <LanguageSelector/>
      <Header user={user} username={username} />
      <Divider />
      <About />
      <LastProjects />
      <Contacts/>
      <Divider />
      <Footer/>
    </>
  );
}