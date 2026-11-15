import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Map } from "@/components/ui/map";

export function Homepage() {
    return (
        <div>
            <section className="relative h-[100svh] min-h-[680px] overflow-hidden">
                <Map />
                <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent to-background" />
            </section>
            <section>
                teste
                <Carousel className="w-full max-w-md">
                    <CarouselContent>
                        <CarouselItem key={1}>
                            <Card className="group/card relative aspect-video overflow-hidden border-0 p-0">
                                <img
                                    src={`https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D`}
                                    alt={`Slide`}
                                    width={1000}
                                    height={800}
                                    className="absolute inset-0 size-full scale-100 object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-105"
                                />
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </section>
        </div>
    );
}
