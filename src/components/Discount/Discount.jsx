

const Discount = () => {
    return (
        <div className="text-center space-y-3 mb-10">
            <h3 className="text-3xl font-bold">Ten Percent Member Discount</h3>
            <p>Subscribe to our newsletters now and stay up to date with new collections, the latest lookbooks and exclusive offers.</p>
            <div className="flex justify-center">
            <div className="lg:w-1/3 md:w-2/3 w-full border-2 p-4 rounded">
                <input className="dark:text-black" type="email" name="" placeholder="Enter your email address here..." id="" />
                <input className="cursor-pointer pl-3 hover:text-orange-600" type="submit" value="Subscribe" />
            </div>
            </div>
            
        </div>
    );
};

export default Discount;