import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="w-80">
        <Card>
        <CardContent>
          <div className="grid gap-4">
          <div className="bg-muted">
                <Image src={"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"} alt={"product"} height={300} width={200}/>
            </div>
            <div className="grid gap-2">
            <h2 className="font-medium text-lg">Mascard dhaskara</h2>
            </div>
          </div>
        </CardContent>
    </Card>
    </div>
  )
}