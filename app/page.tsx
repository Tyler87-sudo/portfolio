import Button from "./components/button"
import Header from "./components/header"
import Footer from "./components/footer"
import Card from "./components/card"

function Greet({name} : {name: string}) {

 return (
   <h1>{name}</h1>
 )

}

export default function App() {
  return (

    <div className="mx-5 max-[600px]:mx-1">
      <div id="box"></div>
      <div className="grid grid-cols-1 gap-5">
        <Card className="mt-3 mb-3" description="link" title="Korte beschrijving" text="Als een leuke, georganiseerde, gemotiveerde en enthousiast
persoon ben ik nieuwsgierig naar veel dingen. Ik help graag
andere mensen en leer graag van hen en ik ben erg enthousiast
om met andere mensen samen te gaan werken"></Card>
</div>
    <div className="grid grid-rows-2 grid-cols-2 gap-5">
        <Card description="link" title="Mijn projecten pagina" text="Hier vind je al mijn modules"></Card>
        <Card description="link" title="Mijn Modules pagina" text="Hier vind je al mijn modules"></Card>
        <Card className="mb-3" description="link" title="Mijn CV pagina" text="Hier vind je al mijn skills & vaardigheden"></Card>
        <Card className="mb-3"description="link" title="Over mij" text="Hier vind je alles over mij"></Card>
      </div>

    </div>
  );
}

const newStyle = {
  backgroundColor: "red",
}