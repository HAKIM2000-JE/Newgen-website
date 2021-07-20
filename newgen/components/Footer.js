import { RiFacebookFill, RiTwitterFill, RiLinkedinFill} from 'react-icons/ri';


function Footer() {
    return (
        <div>
            <footer class="footer-1 text-white bg-gray-800 py-8 sm:py-12 mt-16">
                <div class="container mx-auto px-4">
                    <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                        
                        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                            <h5 class="text-xl font-bold mb-6">Company</h5>
                            <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-blue-900 hover:text-blue-900">Press & blog</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-blue-900 hover:text-blue-900">About Us</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-blue-900 hover:text-blue-900">Another Privacy</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-blue-900 hover:text-blue-900">Jobs</a>
                                </li>
                            </ul>
                        </div>
                        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 class="text-xl font-bold mb-6">Product</h5>
                            <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-blue-900 hover:text-blue-900">Pricing</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-blue-900 hover:text-blue-900">Content Management</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-blue-900 hover:text-blue-900">Tacking</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-blue-900 hover:text-blue-900">Report</a>
                                </li>
                            </ul>
                        </div>
                        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 class="text-xl font-bold mb-6">Help</h5>
                            <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-blue-900 hover:text-blue-900">Support</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-blue-900 hover:text-blue-900">Help Center</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-blue-900 hover:text-blue-900">Contact Us</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-blue-900 hover:text-blue-900">Hajar.Etakafi@newgen.ma</a>
                                </li>
                                <li class="mb-2">
                                    <a href="" class="border-b border-solid border-transparent hover:border-blue-900 hover:text-blue-900">Simo.haitof@newgen.ma </a>
                                </li>
                            </ul>
                        </div>
                        <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                            <h5 class="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
                            <div class="flex sm:justify-center xl:justify-start">
                                <a href="" class="h-8 w-8 border-2 border-gray-400 rounded-full text-center py-1  hover:text-white hover:bg-blue-400 hover:border-blue-400">
                                    <RiFacebookFill className="w-6 h-6"/>
                                </a>
                                <a href="" class="w-8 h-8  border-2 border-gray-400 rounded-full text-center p-1 ml-2 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                                    <RiTwitterFill className="w-5  h-5" />
                                </a>
                                <a href="https://www.linkedin.com/company/newgenintelligence/" class="w-8 h-8  border-2 border-gray-400 rounded-full text-center p-1 ml-2 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                                    <RiLinkedinFill className="w-5  h-5" />
                                </a>
                            </div>
                        </div>
                    </div>r

                    
                        </div>
</footer>
            
        </div>
    )
}

export default Footer
