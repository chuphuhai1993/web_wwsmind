import NavLink from "../NavLink"
import Image from "next/image"
import appStore from "../../../public/logos/app_store.svg"
import googlePlay from "../../../public/logos/google_play.svg"

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    Creations for Billions
                </h1>
                <p className="max-w-xl mx-auto">
                    wwwsmind is a company that invests in and develops mobile apps, games, and AI apps with over 1 billion downloads globally.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="#"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
                    >
                        <div className="flex items-center gap-x-2">
                            <Image src={appStore} width={16} height={16} alt="App Store" />
                            <span>App Store</span>
                        </div>
                    </NavLink>
                    <NavLink
                        href="#"
                        className="text-gray-700 border hover:bg-gray-50"
                        scroll={false}
                    >
                        <div className="flex items-center gap-x-2">
                            <Image src={googlePlay} width={16} height={16} alt="Google Play" />
                            <span>Google Play</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero