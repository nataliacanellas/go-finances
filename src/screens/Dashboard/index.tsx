import React from 'react';
import { ListRenderItemInfo } from 'react-native';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {
  Container, 
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,

} from './styles'

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard(){
  const data:DataListProps[] = [
    {
    id: '1',
    type: 'positive',
    title: "Website Development",
    amount: "$8,000.00",
    category: {
      name: 'Sales',
      icon: 'dollar-sign',
    },
    date: "01/15/2022",
  },
  {
    id: '2',
    type: 'negative',
    title: "Krispy K Donuts",
    amount: "$30.00",
    category: {
      name: 'Food',
      icon: 'coffee',
    },
    date: "02/01/2022",
  },
  {
    id: '3',
    type: 'negative',
    title: "House Rent",
    amount: "$2,500.00",
    category: {
      name: 'House',
      icon: 'home',
    },
    date: "02/02/2022",
  }
];
  
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/64443469?s=96&v=4'}}
            />
            <User>
              <UserGreeting>Hello,</UserGreeting>
              <UserName>Natalia</UserName>
            </User>
          </UserInfo>
          <Icon name="power"/>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard 
        type="up"
        title="Income" 
        amount="$34,500.00" 
        lastTransaction="Last Inflow Transaction on february 4th"
        />
        <HighlightCard 
        type="down"
        title="Outcome" 
        amount="$2,358.00" 
        lastTransaction="Last Outflow Transaction on february 2nd"
        />
        <HighlightCard 
        type="total"
        title="Total" 
        amount="$32,142.00" 
        lastTransaction="Last Transaction on february 4th"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listing</Title>

        <TransactionList
        data = {data} 
        keyExtractor={(item) => item.id}
        renderItem={({ item })  => <TransactionCard data={item}/>}
        />
      </Transactions>
    </Container>
  )
}