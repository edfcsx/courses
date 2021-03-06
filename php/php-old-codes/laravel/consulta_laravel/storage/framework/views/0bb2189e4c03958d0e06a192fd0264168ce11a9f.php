<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h1>insercao de menu</h1>
                <hr/>
                    <form action="<?php echo e(route('menu.store')); ?>" method="post" class="form-group">
                        <?php echo e(csrf_field()); ?>

                        <p>
                            <label>Nome do Item:</label>
                            <input type="text" name="name" value="<?php echo e(old('name')); ?>" class="form-control <?php if($errors->has('name')): ?> is-invalid <?php endif; ?>">
                            <?php if($errors->has('name')): ?>
                                <span class="invalid-feedback" role="alert">
                                    <strong><?php echo e($errors->first('name')); ?></strong>
                                </span>
                            <?php endif; ?>
                        </p>

                        <p>
                            <label>Preço:</label>
                            <input type="text" name="price" value="<?php echo e(old('price')); ?>" class="form-control <?php if($errors->has('price')): ?> is-invalid <?php endif; ?>">
                            <?php if($errors->has('address')): ?>
                                <span class="invalid-feedback" role="alert">
                                    <strong><?php echo e($errors->first('price')); ?></strong>
                                </span>
                            <?php endif; ?>
                        </p>

                        <p>
                            <label>Selecione um restaurante para cadastrar o item:</label>
                            <select name="restaurant_id" class="form-control">
                                <?php $__currentLoopData = $restaurant; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $r): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <option value="<?php echo e($r->id); ?>"><?php echo e($r->name); ?></option>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </select>
                            <?php if($errors->has('restaurant_id')): ?>
                                <span class="invalid-feedback" role="alert">
                                    <strong><?php echo e($errors->first('restaurant_id')); ?></strong>
                                </span>
                            <?php endif; ?>
                        </p>

                        <input type="submit" value="Cadastrar Menu" class="btn btn-info">
                    </form>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>