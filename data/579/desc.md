Cho đồ thị gồm $N$ nút được đánh số từ $1$ đến $N$ và $M$ cung có hướng. Trên $N$ nút này, tại mỗi nút có không quá một khối hộp, có nút không có khối hộp nào. Một bước đẩy được coi là đúng nếu ta đẩy một khối hộp từ vị trí hiện tại đi theo cung có hướng tương ứng nào đó đến một nút rỗng. Một nút rỗng là một nút hoặc là không chứa gì hoặc nút đó là nút $1$. Hãy tìm lịch trình đẩy tất cả các hộp về nút $1$ sao cho số bước thực hiện là nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu tiên là ba số nguyên dương $N, M$ và $K$ trong đó $K$ là số hộp. $1 ≤ N ≤ 10000, 0 ≤ M ≤ 50000, 0 ≤ K ≤ N$;
- Dòng thứ hai ghi $K$ số khác nhau là số hiệu của $K$ ô có hộp;
- $M$ dòng tiếp, mỗi dòng ghi hai số $u, v$ với ý nghĩa có cung nối từ $u$ đến $v$.

## Dữ liệu ra:
- Ghi ra số $S$ là số bước đẩy ít nhất ta cần phải thực hiện.

## Ví dụ:
### Dữ liệu vào:
```
4 3 3
2 3 4
3 1
2 1
4 2
```

### Dữ liệu ra:
```
4
```