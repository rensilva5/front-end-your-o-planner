import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
// import { Card } from 'antd'
// This component will have Cards with countries,
// and a link from its country to their destinations.
// This contain a list of countries

export default function CountryCards ( { country }) {
    return (
        <>

        <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={country.photoUrl}
          height={160} width={200}
          alt={country.id}
          />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{country.id}</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed"> {country.description}</Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>        
        </>
    )
}

