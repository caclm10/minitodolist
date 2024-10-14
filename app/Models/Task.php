<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    /** @use HasFactory<\Database\Factories\TaskFactory> */
    use HasFactory;

    protected $fillable = ['content', 'completed_at'];

    protected $appends = ['is_completed'];

    public function completeOrNull(): static
    {
        $this->completed_at = $this->is_completed ? null : now();

        return $this;
    }

    protected function isCompleted(): Attribute
    {
        return Attribute::get(function (mixed $value, array $attrs) {
            return $attrs['completed_at'] != null;
        });
    }
}
