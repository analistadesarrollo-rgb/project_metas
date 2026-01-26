import { QRCodeCanvas } from 'qrcode.react'
import { Card } from './card'

interface GenerateQRProps {
  codigo: string
  nombres: string
  username: string
  zona: string
}

export function GenerateQR({ codigo, nombres, username, zona }: GenerateQRProps) {
  return (
    <Card className='flex flex-col items-center justify-center gap-2 p-4 dark:bg-white'>
      <QRCodeCanvas size={120} value={`${zona}&${nombres}&${username}&${codigo}`} />
    </Card>
  )
}
