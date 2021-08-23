**<center>Nguồn: Beginner Free Contest 14</center>**

Cho một dãy $A$ gồm $N$ ô và $N$ màu được đánh số từ $1$ đến $N$. Ô thứ $i$ được tô màu $A_i$ $(0 ≤ A_i ≤ N)$, $A_i = 0$ nếu ô thứ $i$ không được tô màu). Trò chơi như sau, người chơi được cung cấp một mảng $S$ độ dài $N$, ban đầu $S_i = 0$. Mỗi lượt chơi, người chơi chọn một tập gồm các đoạn $[L_i, R_i]\ (1 ≤ L_i ≤ R_i ≤ N)$ trong $S$ không giao nhau và tô màu lên chúng sao cho không có hai đoạn nào cùng màu.

Biết rằng, nếu một màu đã được dùng thì các lượt tiếp theo người chơi không được chọn màu đó nữa. Hỏi cần ít nhất bao nhiêu lượt chơi để người chơi biến đổi dãy $S$ thành $A$.

## Dữ liệu vào:
- Dòng đầu tiên, gồm một số nguyên $N$;
- Dòng tiếp theo gồm $N$ số nguyên $A_i$ - màu được tô ở ô thứ $i$.

## Dữ liệu ra:
- Gồm một dòng duy nhất là kết quả bài toán. Nếu không tô được thì ghi ra $-1$.

## Ví dụ:
### Dữ liệu vào:
```
7
0 1 4 5 1 3 3
```

### Dữ liệu ra:
```
2
```

### Giải thích:
- Ở ví dụ trên, lượt $1$, người chơi tô màu $1$ trên đoạn $[2;5]$, màu $3$ trên đoạn $[6;7]$. Lượt $2$, người chơi tô màu $4$ trên đoạn $[3; 3]$, màu $5$ trên đoạn $[4; 4]$.

## Giới hạn:
- $1 ≤ N ≤ 100000$.