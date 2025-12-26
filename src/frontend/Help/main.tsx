import { NavLink, Outlet } from "react-router";

export default function Help(){
    return(
        <section className="flex flex-col gap-5 w-[80vw] place-self-center divide-y">
            <h2 className="font-bold text-xl pb-4">Informasi dan Bantuan</h2>
            <div className="grid lg:grid-cols-[0.4fr_1fr] gap-8 max-lg:divide-y">
                <aside className="flex flex-col gap-5 pb-5">
                    <p className="font-bold my-3">Menu</p>
                    <NavLink to={'help'} className={({isActive}) => isActive? 'text-lime-400' : ''}><p>Pusat Bantuan</p></NavLink>
                    <NavLink to={'about'} className={({isActive}) => isActive? 'text-lime-400' : ''}><p>Tentang Kami</p></NavLink>
                    <NavLink to={'contact'} className={({isActive}) => isActive? 'text-lime-400' : ''}><p>Hubungi Kami</p></NavLink>
                    <NavLink to={'tutorial'} className={({isActive}) => isActive? 'text-lime-400' : ''}><p>Cara berbelanja</p></NavLink>
                    <NavLink to={'other'} className={({isActive}) => isActive? 'text-lime-400' : ''}><p>Lainnya</p></NavLink>
                </aside>
                <div className="my-3">
                    <Outlet/>
                </div>
            </div>
        </section>
    )
}