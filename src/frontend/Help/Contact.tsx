import { BookUser } from "lucide-react";

export default function Contact(){
    return(
        <article className="grid xl:grid-cols-2 gap-8">
            <div className="contact1 flex flex-col gap-5 overflow-x-auto scrollbar-hide">
                <h3 className="font-bold text-xl flex items-center gap-3"><BookUser/> Kuchiha</h3>
                <p className="font-bold">Kontak</p>
                <div className="grid grid-cols-2">
                    <div className="left flex flex-col gap-3">
                        <p>Telepon</p>
                        <p>Whatsapp</p>
                        <p>Email</p>
                    </div>
                    <div className="right flex flex-col gap-3">
                        <p>087822966480</p>
                        <p>087822966480</p>
                        <p>Kuchiha@Example.com</p>
                    </div>
                </div>
                <p className="font-bold">Jam Operasional</p>
                <div className="grid grid-cols-2">
                    <p>Senin-Minggu</p>
                    <p>08.00 - 15.00</p>
                </div>
            </div>
            <div className="contact2 flex flex-col gap-5 overflow-x-auto scrollbar-hide">
                <h3 className="font-bold text-xl flex items-center gap-3"><BookUser/> FelienZ</h3>
                <p className="font-bold">Kontak</p>
                <div className="grid grid-cols-2">
                    <div className="left flex flex-col gap-3">
                        <p>Telepon</p>
                        <p>Whatsapp</p>
                        <p>Email</p>
                    </div>
                    <div className="right flex flex-col gap-3">
                        <p>081229564138</p>
                        <p>081229564138</p>
                        <p>FelienZ@Example.com</p>
                    </div>
                </div>
                <p className="font-bold">Jam Operasional</p>
                <div className="grid grid-cols-2">
                    <p>Senin-Minggu</p>
                    <p>08.00 - 15.00</p>
                </div>
            </div>
        </article>
    )
}