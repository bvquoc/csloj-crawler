Bác John vừa tổ chức một đội đua tiếp sức bằng cách chọn ra $K\ (2 ≤ K ≤ 40)$ con bò của bác. Cuộc đua diễn ra trên nông trang của bác nơi có $N\ (4 ≤ N ≤ 800)$ cánh đồng đươc đánh số $1…N$ và $M\ (1 ≤ M ≤ 4000)$ đường đi hai chiều có tính chất duy nhất để nối các cặp hai cánh đồng riêng biệt. Bạn sẽ được cho thời gian mỗi con bò cần có để đi qua mỗi đoạn đường.

Con bò đầu tiên bắt đầu cuộc đua tại cánh đồng $1$ và chạy tới đích tại cánh đồng $N$ nhanh nhất có thể. Khi con bò đầu tiên kết thúc, con bò tiếp theo sẽ bắt đầu từ cánh đồng $1$ và chạy tới cánh đồng $N$ và cứ thế đến con bò thứ $K$. Trong cuộc đua này, không có hai con bò nào có thể theo chính xác cùng một hành trình (một hành trình là một dãy các cánh đồng).

Viết chương trình để tính thời gian cần thiết nhỏ nhất có thể được cho đội đua tiếp sức của bác John. Bạn được đảm bảo rằng tồn tại thời gian nhỏ nhất có thể. Mọi con bò có thể đi lại một đường nối trong hành trình của mình tới chuồng khác nếu nó là cần thiết cho một lời giải  “tối ưu”. Ngay khi một con bò tới cánh đồng $N$, lượt đua của nó xem như kết thúc.

## Dữ liệu vào:
- Dòng đầu tiên ghi ba số nguyên $K, N$ và $M$;
- $M$ dòng tiếp theo mỗi dòng chứa ba số nguyên mô tả một đường đi trực tiếp nối cánh đồng đầu, cành đồng cuối và thời gian nguyên để đi qua đường nối (trong khoảng $1…9500$).

## Dữ liệu ra:
- Gồm duy nhất một số nguyên chỉ giá trị nhỏ nhất tìm được.

Hai số liên tiếp trên một dòng được ghi cách nhau một dấu cách.

## Ví dụ:
### Dữ liệu vào:
```
4 5 8
1 2 1
1 3 2
1 4 2
2 3 2
2 5 3
3 4 3
3 5 4
4 5 6
```

### Dữ liệu vào:
```
23
```

### Giải thích:
- Các đường đi dẫn đến kết quả nghiệm trong test ví dụ là:
- Con bò $1: 1→2→5$;
- Con bò $2: 1→3→5$;
- Con bò $3: 1→2→1→2→5$;
- Con bò $4: 1→2→3→5$.