import Card from './cards/card'
import styles from './projetos.module.css'
import Image from 'next/image'

export default function Projetos(){
    return(
        <div className={styles.box}>
            <h1>Projetos</h1>
            <hr/>

            <div className={styles.cards}>
                <Card
                    img={<Image src="/img/sellflux.png" alt="Sellflux" width={168} height={40} />}
                    titulo={"Clone SellFlux"}
                    feitoEm={"ReactJS / NextJS"}
                    description={"Este projeto foi feito para colocar em prática meus conhecimentos. Fiz um clone do site SellFlux, pois tinha muitos elementos que eu poderia treinar."}
                    linkAcessarSite={"https://copy-sellflux-nextjs.vercel.app/"}
                    linkGithub={"https://github.com/kaiolabs/copy-sellflux-nextjs"}
                />

                <Card
                    img={<Image src="/img/savings.svg" alt="Coin" width={192} height={192} />}
                    titulo={"Project Manager"}
                    feitoEm={"ReactJS"}
                    description={"Site que gerencia as despesas de um ou mais projetos, vai desda criação da ideia do projeto até a finalização com suporte para alterações e acréscimos ao longo do caminho."}
                    linkAcessarSite={"https://project-manager-sigma.vercel.app/"}
                    linkGithub={"https://github.com/kaiolabs/project-manager"}
                />

                <Card
                    img={<Image src="/img/book.png" alt="Picture" width={160} height={160} />}
                    titulo={"Code Book"}
                    feitoEm={"HTML5 / CSS3 / JS"}
                    description={"Projeto tem como objetivo introduzir mais pessoas ao mundo da programação, ensinando as a programar e aplicar esses conhecimentos."}
                    linkAcessarSite={"https://codebook.com.br/"}
                    linkGithub={"https://github.com/kaiolabs/kaiolabs.github.io"}
                />

                <Card
                    img={<Image src="/img/discord.jpg" alt="Picture" width={200} height={200} />}
                    titulo={"Devcord"}
                    feitoEm={"ReactJS / NextJS"}
                    description={"Este site foi um CRUD (Create, Read, Update, Delete) que utiliza tanto conhecimento de Back end quanto Front end, para fazer um site de chat para devs."}
                    linkAcessarSite={"https://aluracord-nextjs-orcin.vercel.app/"}
                    linkGithub={"https://github.com/kaiolabs/Aluracord-nextjs"}
                />

                <Card
                    img={<Image src="/img/dogbot.png" alt="Picture" width={220} height={220} />}
                    titulo={" Dog Bot "}
                    feitoEm={"HTML5 / CSS3"}
                    description={"Esse site é uma landing page feita para exibir um projeto de bot ficticio que tem como objetivo auxiliar você a cuidar do seu dog."}
                    linkAcessarSite={"https://codebook.com.br/Landing-page-Dog-Bot/"}
                    linkGithub={"https://github.com/kaiolabs/Landing-page-Dog-Bot"}
                />

                <Card
                    img={<Image src="/img/cyberpunk.gif" alt="Picture" width={260} height={281} />}
                    titulo={"Cyberpunk Glass"}
                    feitoEm={"HTML5 / CSS3"}
                    description={"Site com tema cyberpunk feito para treinar meus conhecimentos em HTML5, CSS3, UX/UI, responsividade e keyframe."}
                    linkAcessarSite={"https://glassmorphism-cyberpunk-responsive-website.vercel.app/"}
                    linkGithub={"https://github.com/kaiolabs/Glassmorphism-Cyberpunk-Responsive-Website"}
                />
                
            </div>
        </div>
    )
}