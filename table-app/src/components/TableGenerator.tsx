import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

export function TableGenerator() {
  const [rows, setRows] = useState<number>(3);
  const [cols, setCols] = useState<number>(3);
  const [tableData, setTableData] = useState<string[][]>([]);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = () => {
    // Initialize empty table or preserve data if we wanted to be fancy, 
    // but typically "generate" implies a fresh start or resizing.
    // Let's create a new empty table for now to match the user request "generates a table".
    const newData = Array.from({ length: rows }, () => Array(cols).fill(''));
    setTableData(newData);
    setIsGenerated(true);
  };

  const handleCellChange = (rowIndex: number, colIndex: number, value: string) => {
    const newData = [...tableData];
    newData[rowIndex][colIndex] = value;
    setTableData(newData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Table Generator</CardTitle>
          <CardDescription>Enter the number of rows and columns to generate a table.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="space-y-2 w-full sm:w-1/3">
              <label htmlFor="rows" className="text-sm font-medium">Rows</label>
              <Input
                id="rows"
                type="number"
                min="1"
                max="100"
                value={rows}
                onChange={(e) => setRows(parseInt(e.target.value) || 0)}
              />
            </div>
            <div className="space-y-2 w-full sm:w-1/3">
              <label htmlFor="cols" className="text-sm font-medium">Columns</label>
              <Input
                id="cols"
                type="number"
                min="1"
                max="20"
                value={cols}
                onChange={(e) => setCols(parseInt(e.target.value) || 0)}
              />
            </div>
            <Button onClick={handleGenerate} className="w-full sm:w-1/3">
              Generate Table
            </Button>
          </div>
        </CardContent>
      </Card>

      {isGenerated && (
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Your Table</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <div className="min-w-max">
              {tableData.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                  {row.map((cell, colIndex) => (
                    <div key={`${rowIndex}-${colIndex}`} className="p-1 min-w-[100px]">
                      <Input
                        value={cell}
                        onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                        placeholder={`R${rowIndex+1} C${colIndex+1}`}
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
