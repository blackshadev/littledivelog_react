import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import { InputAdornment, MenuItem, Select, SelectChangeEvent } from '@mui/material';

import type { DiveTank } from '../../../../api/types/tanks/DiveTank';
import Button from '../../Button';
import TextField from '../TextField';
import { PressureWrapper, Row, TankInputContainer, TankLabel } from './components';

type Props = {
    name: string;
    label: string;
    value: DiveTank;
    onValueChange(v: DiveTank): void;
    onDelete(): void;
};

function parseValue(v?: string): number {
    if (!v) {
        return 0;
    }

    if (!/^\d+$/.test(v)) {
        return 0;
    }

    return parseInt(v);
}

const TankInput: React.FC<Props> = ({ name, label, value, onValueChange, onDelete }) => {
    return (
        <TankInputContainer>
            <TankLabel>
                {label}
                <Button onClick={onDelete}>
                    <DeleteIcon />
                </Button>
            </TankLabel>
            <Row>
                <TextField
                    className="--first"
                    name={`${name}.pressure.begin`}
                    label="Begin Pressure"
                    placeholder="200"
                    value={value.pressure.begin}
                    onValueChange={(v): void =>
                        onValueChange({ ...value, pressure: { ...value.pressure, begin: parseValue(v) } })
                    }
                />
                <TextField
                    name={`${name}.pressure.end`}
                    label="End Pressure"
                    placeholder="50"
                    value={value.pressure.end}
                    onValueChange={(v): void =>
                        onValueChange({ ...value, pressure: { ...value.pressure, end: parseValue(v) } })
                    }
                />
                <PressureWrapper className="--last">
                    <Select
                        label="Type"
                        fullWidth
                        name={`${name}.pressure.type`}
                        aria-label="Type"
                        value={value.pressure.type}
                        onChange={(event: SelectChangeEvent<'psi' | 'bar'>): void =>
                            onValueChange({
                                ...value,
                                pressure: { ...value.pressure, type: event.target.value as 'psi' | 'bar' },
                            })
                        }
                    >
                        <MenuItem value="bar">bar</MenuItem>
                        <MenuItem value="psi">psi</MenuItem>
                    </Select>
                </PressureWrapper>
            </Row>

            <Row>
                <TextField
                    className="--first"
                    name={`${name}.volume`}
                    label="Volume"
                    placeholder="12"
                    value={value.volume}
                    onValueChange={(v): void => onValueChange({ ...value, volume: parseValue(v) })}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">L</InputAdornment>,
                    }}
                />

                <TextField
                    className="--last"
                    name={`${name}.oxygen`}
                    label="Oxygen"
                    placeholder="21"
                    value={value.oxygen}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">%</InputAdornment>,
                    }}
                    onValueChange={(v): void => onValueChange({ ...value, oxygen: parseValue(v) })}
                />
            </Row>
        </TankInputContainer>
    );
};

export default TankInput;
