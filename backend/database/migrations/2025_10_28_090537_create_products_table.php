<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('sku')->unique();
            $table->text('description');
            $table->text('specifications');
            $table->decimal('price', 10, 2);
            $table->string('ean_barcode', 13)->nullable();
            $table->boolean('available_for_sale')->default(false);
            $table->timestamps();

            // Indexes for performance
            $table->index('sku');
            $table->index('available_for_sale');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
