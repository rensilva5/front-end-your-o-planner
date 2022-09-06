import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Card } from 'antd'

// This component will have Cards with countries,
// and a link from its country to their destinations.

export default function CountryCards ( { country }) {
    const { setBestfor, setType } = useContext("")
    let navigate = useNavigate()

    const onClickFrance = () => {
        setBestfor("france")
        setType("france")
        navigate('/destinations')
    }

    const onClickGermany = () => {
        setBestfor("germany")
        setType("germany")
        navigate('/destinations')
    }

    const onClickGreece = () => {
        setBestfor("greece")
        setType("greece")
        navigate('/destinations')
    }

    const onClickItaly = () => {
        setBestfor("italy")
        setType("italy")
        navigate('/destinations')
    }

    const onClickSpain = () => {
        setBestfor("spain")
        setType("spain")
        navigate('/destinations')
    }

    const onClickUnitedKingdom = () => {
        setBestfor("unitedKingdom")
        setType("unitedKingdom")
        navigate('/destinations')
    }

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
          Details Next Page
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

