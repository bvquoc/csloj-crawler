**<center>Nguồn: Beginner Free Contest 4</center>**

Tèo có một số lá bài, trong đó có $A_i$ lá bài ghi giá trị $i$. Hai lá bài $x, y$ được gọi là một cặp nếu $|x − y| ≤ 1$.

Hỏi Tèo có thể tạo tối đa bao nhiêu cặp lá bài biết rằng không có lá bài nào nằm trong $2$ cặp khác nhau.

## Dữ liệu vào:
- Dòng đầu, chứa số nguyên dương $N$ $(1 ≤ N ≤ 10^5)$ là số giá trị khác nhau của các lá bài (các giá trị từ $1$ đến $N$);
- $N$ dòng tiếp theo, mỗi dòng gồm một số nguyên $A_i$ $(1 ≤ A_i ≤ 10^9)$.

## Dữ liệu ra:
- Gồm một dòng duy nhất là kết quả bài toán.

## Ví dụ:
### Dữ liệu vào:
```
4
4
0
3
2
```

## Dữ liệu ra:
```
4
```

## Giải thích:
- Có $4$ lá bài ghi số $1$, $3$ lá bài ghi số $2$, $2$ lá bài ghi số $4$. Có thể tạo tối đa $4$ cặp lá bài: $(1, 1), (1, 1), (3, 4), (3, 4)$.