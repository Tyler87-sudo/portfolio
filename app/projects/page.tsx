import Card from "/app/components/card"

export default function ProjectsPage() {
    return (
      <div>
            <div>
<Card style={{fontWeight: "900"}} className="h-16 place-self-center m-3" description="link" title="Projecten Schooljaar 2023-2024 (1ste Jaar)"></Card>
    </div>
        
      <div className="mx-5 grid grid-cols-2 grid-rows-2 gap-5">
        <Card hrefimg="/img/homepage.png" hrefbtn="https://www.google.com" description="link" title="De Websitekampioen" text="Dit was ons project om een website te maken voor een bedrijf. In dit geval hebben wij gekozen voor een bedrijf die websites maakt."></Card>
        <Card description="link" title="Seriousapp" text="Een web-app die we hebben gemaakt in opdracht van het GKB om de gevaren van afterpay duidelijk te maken"></Card>
        <Card className=""description="link" title="Game voor wijkgerichtwerken" text="Een game die we hebben gemaakt als instructie voor mensen die meehelpen met wijkgerichtwerken."></Card>
      </div>
      <div>
        <Card style={{fontWeight: "900"}} className="h-16 place-self-center m-3" description="link" title="Projecten Schooljaar 2024-2025 (2de Jaar)"></Card>
      </div>
      <div className="mx-5 grid grid-cols-2 grid-rows-2 gap-5">
      <Card className="" description="link" title="Over mij" text=""></Card>
      <Card description="link" title="" text="my about me"></Card>
      <Card className="mb-3" description="link" title="" text="my about me"></Card>
      <Card className="mb-3 "description="link" title="" text="my about me"></Card>
      </div>
    
      </div>
  
    )
  }