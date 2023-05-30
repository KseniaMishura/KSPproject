import { JwtModuleOptions } from '@nestjs/jwt'

export const getJwtConfig = async(): Promise<JwtModuleOptions> =>({
        secret: 'secretCode'
    }) 