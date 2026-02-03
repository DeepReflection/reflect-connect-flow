import { useState } from 'react';
import { Plus, Trash2, Edit2, ChevronDown, ChevronUp, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface ItemField {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'url' | 'date' | 'time';
  placeholder?: string;
  required?: boolean;
}

interface ItemListEditorProps<T extends Record<string, any>> {
  title: string;
  items: T[];
  fields: ItemField[];
  onAdd: (item: T) => void;
  onUpdate: (index: number, updates: Partial<T>) => void;
  onRemove: (index: number) => void;
  imageField?: string;
  titleField?: string;
}

function ItemListEditor<T extends Record<string, any>>({
  title,
  items,
  fields,
  onAdd,
  onUpdate,
  onRemove,
  imageField = 'imageUrl',
  titleField = 'title',
}: ItemListEditorProps<T>) {
  const [isAdding, setIsAdding] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newItem, setNewItem] = useState<Partial<T>>({});
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleAdd = () => {
    const requiredFields = fields.filter(f => f.required !== false);
    const hasAllRequired = requiredFields.every(f => newItem[f.key as keyof T]);
    
    if (hasAllRequired) {
      onAdd(newItem as T);
      setNewItem({});
      setIsAdding(false);
    }
  };

  const renderField = (field: ItemField, value: any, onChange: (value: string) => void) => {
    const commonProps = {
      placeholder: field.placeholder || field.label,
      value: value || '',
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
    };

    if (field.type === 'textarea') {
      return <Textarea {...commonProps} rows={3} />;
    }
    return <Input {...commonProps} type={field.type === 'url' ? 'url' : 'text'} />;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-lg font-semibold">{title}</Label>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsAdding(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Adicionar
        </Button>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <Collapsible
            key={index}
            open={expandedIndex === index}
            onOpenChange={(open) => setExpandedIndex(open ? index : null)}
          >
            <Card className="bg-card/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  {imageField && item[imageField] && (
                    <img
                      src={item[imageField]}
                      alt=""
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">{item[titleField] || 'Sem título'}</h4>
                    {item.description && (
                      <p className="text-sm text-muted-foreground truncate">{item.description}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="icon">
                        {expandedIndex === index ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onRemove(index)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CollapsibleContent className="mt-4 space-y-4">
                  {fields.map((field) => (
                    <div key={field.key} className="space-y-2">
                      <Label>{field.label}</Label>
                      {renderField(
                        field,
                        item[field.key],
                        (value) => onUpdate(index, { [field.key]: value } as Partial<T>)
                      )}
                    </div>
                  ))}
                </CollapsibleContent>
              </CardContent>
            </Card>
          </Collapsible>
        ))}

        {isAdding && (
          <Card className="border-primary/50 bg-primary/5">
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Novo item</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setIsAdding(false);
                    setNewItem({});
                  }}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              {fields.map((field) => (
                <div key={field.key} className="space-y-2">
                  <Label>
                    {field.label}
                    {field.required !== false && <span className="text-destructive ml-1">*</span>}
                  </Label>
                  {renderField(
                    field,
                    newItem[field.key as keyof T],
                    (value) => setNewItem({ ...newItem, [field.key]: value })
                  )}
                </div>
              ))}
              <div className="flex gap-2 justify-end">
                <Button variant="outline" size="sm" onClick={() => {
                  setIsAdding(false);
                  setNewItem({});
                }}>
                  Cancelar
                </Button>
                <Button size="sm" onClick={handleAdd}>
                  <Check className="w-4 h-4 mr-2" />
                  Adicionar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {items.length === 0 && !isAdding && (
          <p className="text-muted-foreground text-center py-4">
            Nenhum item adicionado ainda.
          </p>
        )}
      </div>
    </div>
  );
}

export default ItemListEditor;
