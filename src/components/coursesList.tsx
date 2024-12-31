import { Carousel, CarouselContent, CarouselItem}
    from "@/components/ui/carousel"
import { Button } from "./ui/button"

export default function ({ list }) {
    return (
        <Carousel>
            <CarouselContent>
                {
                    list.map(item => (
                        <CarouselItem className="basis-1/2 " ><Button>{item}</Button></CarouselItem>
                    ))
                }
            </CarouselContent>
        </Carousel>
    )
}