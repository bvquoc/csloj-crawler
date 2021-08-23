**<center>CSP Open Contest 3</center>**

Hôm nay Dubu lại được một1 người bạn nào đó tặng cho một tấm vải rất đẹp. Tấm vải đó có dạng là một hình chữ nhật có $N$ hàng, $M$ cột bao gồm $N × M$ ô, mỗi ô có màu đen hoặc trắng. Như thường lệ để tạo công ăn việc làm cho các bạn sắp thi VOI thì Dubu muốn cắt ra một mảnh vải con hình chữ nhật từ tấm vải lớn kia. Vì vốn là một người yêu thích những mảnh vải cỡ lớn và có màu sắc rực rỡ nên mảnh vải hình chữ nhật mà Dubu cắt ra phải thỏa mãn đồng thời hai tính chất sau:
- Diện tích của mảnh vải đó không nhỏ hơn $K$;
- Mảnh vải đó phải có đủ $2$ loại màu đen và trắng.

Dubu thắc mắc không biết có bao nhiêu cách để có thể cắt ra được một hình chữ nhật thỏa mãn điều kiện trên. Các bạn hãy giúp Dubu nhé!

## Dữ liệu vào:
- Dòng đầu tiên bao gồm ba số nguyên dương $N, M, K$;
- $N$ dòng tiếp theo, dòng thứ $i$ bao gồm $M$ số $a_{i1}, a_{i2}, …, a_{iM}$ trong đó $a_{ij} = 1$ nếu ô ở hàng $i$ cột $j$ có màu đen, ngược lại thì có màu trắng.

## Dữ liệu ra:
- Gồm một số nguyên duy nhất là số cách cắt hình chữ nhật thỏa mãn điều kiện trên.

## Ví dụ:
### Dữ liệu vào:
```
2 4 4
1 1 1 1
0 0 0 0
```

### Dữ liệu ra:
```
6
```

### Giải thích:
- Xét các hình chữ nhật con có đủ $2$ loại màu và diện tích $≥ 4$ thì có $3$ hình có diện tích $4$, $2
hình có diện tích $6$ và $1$ hình có diện tích $8$.

## Giới hạn:
- Trong tất cả các test $K ≤ M × N$;
- Subtask $\#1: 25\%$ số điểm có $N, M ≤ 50$;
- Subtask $\#2: 25\%$ số điểm có $N, M ≤ 500$;
- Subtask $\#3: 50\%$ số điểm có $N, M ≤ 2000$.