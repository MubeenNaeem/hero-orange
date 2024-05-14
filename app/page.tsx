import { DM_Serif_Text, IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";

const mainFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const serifFont = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
});

export default function Home() {
  return (
    <div className={`${mainFont.className}`}>
      {/* Background */}
      <div className="bg-prime-50 absolute -z-50 h-screen w-full bg-opacity-70"></div>

      {/* Main Div */}
      <div className="mx-auto flex max-w-3xl">
        <div className="h-screen w-[1px] bg-gray-200" />

        {/* Main Content */}
        <div className="flex h-screen w-full flex-col justify-center">
          {/* Image and Links */}
          <div className="mx-16 flex justify-between">
            <div className=" h-10 w-10 rounded-full border border-gray-200 p-1.5">
              <Image
                src="https://thispersondoesnotexist.com/"
                alt="person"
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
            <ProfileIcons />
          </div>

          {/* Heading and Professions */}
          <div className="relative mt-8">
            <OrangeCircle />
            <div className=" bg-white bg-opacity-10 px-16 py-8 backdrop-blur-2xl">
              <h1 className="text-7xl font-semibold tracking-tighter">
                Hi, I&rsquo;m <br />
                Mubeen Naeem{" "}
              </h1>
              <p
                className={`text-red mt-4 text-xl font-semibold italic ${serifFont.className}`}
              >
                <span>UI designer</span>
                <span className="text-black"> & </span>
                <span>Frontend Developer</span>
              </p>
            </div>
          </div>

          <div>
            <p className="mt-8 max-w-lg px-16 text-sm">
              {
                "My expertise lies in harmonizing artistic flair with practical usability, sculpting interfaces that captivate and guide users seamlessly. I thrive on translating imaginative concepts into tangible designs, where aesthetics meet functionality to elevate the user journey, making digital interactions truly engaging."
              }
            </p>
          </div>
        </div>

        <div className="h-screen w-[1px] bg-gray-200 " />
      </div>
    </div>
  );
}

const iconSize = 16;

export function ProfileIcons() {
  return (
    <div className="bg-dark flex h-10 items-center rounded-full border border-gray-200  p-1.5">
      <div className="bg-prime-50 flex items-center rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height={iconSize}
          width={iconSize}
          className="mx-2"
        >
          <path d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z" />
        </svg>
        <div className="bg-dark h-7 w-[1px]" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          height={iconSize}
          width={iconSize}
          className="mx-2"
        >
          <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
        </svg>{" "}
        <div className="bg-dark h-7 w-[1px]" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          height={iconSize}
          width={iconSize}
          className="mx-2"
        >
          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
        </svg>
      </div>
    </div>
  );
}

export function OrangeCircle() {
  return (
    <div className="from-start to-end absolute bottom-0 left-0 right-0 top-0 -z-10 m-auto h-80 w-80 rounded-full bg-gradient-to-b blur-lg" />
  );
}
