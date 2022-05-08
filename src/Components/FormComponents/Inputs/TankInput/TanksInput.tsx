import React from 'react';

import AddIcon from '@mui/icons-material/Add';

import type { DiveTank } from '../../../../api/types/tanks/DiveTank';
import Button from '../../Button';
import { Container } from './components';
import TankInput from './TankInput';

type Props = {
    name: string;
    value: DiveTank[];
    onValueChange(v: DiveTank[]): void;
};

function setArrayValue<T>(arr: T[], index: number, value: T): T[] {
    return [...arr.slice(0, index), value, ...arr.slice(index + 1)];
}

function removeArrayItem<T>(arr: T[], index: number): T[] {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const TanksInput: React.FC<Props> = ({ name, value, onValueChange }) => {
    return (
        <Container>
            <legend>DiveTanks ({value.length})</legend>

            {value.map((tank, iX) => (
                <TankInput
                    key={iX}
                    value={tank}
                    label={`Tank ${iX}`}
                    name={`${name}.${iX}`}
                    onValueChange={(tank): void => onValueChange(setArrayValue(value, iX, tank))}
                    onDelete={(): void => onValueChange(removeArrayItem(value, iX))}
                ></TankInput>
            ))}

            <Button
                variant="outlined"
                onClick={(): void =>
                    onValueChange([
                        ...value,
                        { oxygen: 21, pressure: { begin: 200, end: 50, type: 'bar' }, volume: 12 },
                    ])
                }
            >
                <AddIcon />
            </Button>
        </Container>
    );
};

export default TanksInput;
