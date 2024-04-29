import OurService1 from '../../../src/assets/images/ourservice1.png'
import OurService2 from '../../../src/assets/images/ourservice2.png'
import OurService3 from '../../../src/assets/images/ourservice3.png'
import OurService4 from '../../../src/assets/images/ourservice4.png'

const What = () => {
    return (
        <div className="bg-gray-200 p-10 space-y-3 my-10 dark:text-black">
            <div className="text-center">
            <h3 className="text-2xl font-bold">What makes us different</h3>
            <p>Discover our features</p>
            </div>
            <div className='flex lg:flex-row md:flex-col flex-col lg:gap-10 gap-y-5'>
            <div className="bg-white lg:w-1/4 md:w-full w-full flex flex-col items-center justify-center py-10 space-y-3">
                <img src={OurService1} alt="" />
                <h3 className='font-semibold text-xl'>Exclusive Designs</h3>
                <p>Choose from our huge collections</p>

            </div>
            <div className="bg-white lg:w-1/4 md:w-full w-full flex flex-col items-center justify-center py-10 space-y-3">
                <img src={OurService2} alt="" />
                <h3 className='font-semibold text-xl'>Customer Care</h3>
                <p>We are 24/7 open</p>

            </div>
            <div className="bg-white lg:w-1/4 md:w-full w-full flex flex-col items-center justify-center py-10 space-y-3">
                <img src={OurService3} alt="" />
                <h3 className='font-semibold text-xl'>Do Customization</h3>
                <p>Customize your own furniture</p>

            </div>
            <div className="bg-white lg:w-1/4 md:w-full w-full flex flex-col items-center justify-center py-10 space-y-3">
                <img src={OurService4} alt="" />
                <h3 className='font-semibold text-xl'>Quality & Brand Value</h3>
                <p>Get the best quality & brand value</p>

            </div>
            </div>
            
        </div>
    );
};

export default What;