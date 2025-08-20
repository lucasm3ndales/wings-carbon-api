import { Module } from "@nestjs/common";
import { AcceptLanguageResolver, I18nModule, QueryResolver } from "nestjs-i18n";
import path from "path";


@Module({
    imports: [
        I18nModule.forRoot({
            fallbackLanguage: 'en',
            loaderOptions: {
                path: path.join(__dirname),
                watch: true,
            },
            resolvers: [
                { use: QueryResolver, options: ['lang'] },
                AcceptLanguageResolver,
            ],
        }),],
})
export class I18NModule { }