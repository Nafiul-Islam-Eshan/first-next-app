import Image from "next/image";
import next from "../../assets/images/next.svg"

export const metadata = {
  title: 'About',
  description: 'THis is about page',
}


const AboutPage = () => {
    return (
        <div>
            <h1 className="text-2xl">This is an about page</h1>
            {/* Image from public folder */}
            <Image width="100" height="100" src="vercel.svg" alt="Vercel logo"></Image>

            <br /><br />
            {/* Image from assets folder */}
            <Image width="100" height="100" src={next} alt="Next logo"></Image>

            {/* Remote Images form anywhere */}
            <Image width="100" height="100" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL3JtNTk3ZGVzaWduLWMtY2hvbmctMDAxLmpwZw.jpg" alt="pic"></Image>
        </div>
    );
};

export default AboutPage;