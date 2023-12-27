import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query( () => String, { description: 'Hola Mundo es lo que retorna', name: 'hello' })
    helloWorld(): string{
        return 'Hola Mundo';
    }

    @Query( () => Float, {name: 'randomNumber'})
    getRandomNumber(): number{
        return Math.random() * 100;
    }

    @Query( () => Int, {name: 'randomFromZeroTo', description: 'Desde 0 a el argumento "to" no incluido (6 por defecto)'})
    getRandomFromZeroTo( 
        @Args('to', {type: () => Int, nullable: true}) to: number = 6
    ): number{
        return Math.floor(Math.random() * to);
    }

}
