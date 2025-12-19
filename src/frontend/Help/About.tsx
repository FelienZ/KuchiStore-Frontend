export default function About(){
    return(
        <article className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">Overview</h3>
                <p>KuchiStore adalah toko online elektronik yang berdedikasi untuk menyediakan produk-produk berkualitas tinggi dan inovatif untuk memenuhi kebutuhan Anda. Dengan pengalaman dan pengetahuan yang luas dalam industri elektronik, kami berkomitmen untuk memberikan pelayanan terbaik dan produk yang sesuai dengan keinginan Anda.</p>
            </div>
            <ul className="flex flex-col gap-3">
                <h3 className="font-bold">Misi Kami</h3>
                <li>Menyediakan produk elektronik berkualitas tinggi dengan harga kompetitif</li>
                <li>Memberikan pelayanan pelanggan yang ramah dan responsif</li>
                <li>Meningkatkan kepuasan pelanggan melalui produk dan layanan yang inovatif</li>
            </ul>
        </article>
    )
}