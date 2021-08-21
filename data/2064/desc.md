**<center>Nguồn: Free Contest 8 (9)</center>**

Cánh đồng của nông dân John bị ngập lụt! Có thể mô tả cánh đồng như một bảng kích thước $M$ dòng, $N$ cột $(0 < M, N ≤ 100)$, trong đó một số ô bị ngập trong nước và một số ô khô ráo. Có $K$ ô bị ngập $(0 < K ≤ M \times N)$, được mô tả bằng các cặp số $(x_k; y_k)$ là tọa độ của chúng. Các tọa độ đôi một phân biệt.

Một tập các ô được gọi là hồ, nếu như tất cả các ô trong tập đều bị ngập nước, và có thể di chuyển từ một ô sang ô khác cùng trong tập bằng cách đi qua các ô ngập nước kề cạnh. Xác định kích thước của hồ lớn nhất (nhiều ô nhất) trên cánh đồng.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên dương $M, N, K$;
- $K$ dòng tiếp theo, dòng thứ $i$ chứa hai số nguyên dường $x_i, y_i$ là tọa độ của ô ngập nước thứ $i$.

## Dữ liệu ra:
- Một dòng duy nhất là kích thước lớn nhất của hồ nước có trong cánh đồng.

## Ví dụ:
#### Dữ liệu vào:
```
3 4 5
3 2
2 2
3 1
2 3
1 1
```

#### Dữ liệu ra:
```
4
```