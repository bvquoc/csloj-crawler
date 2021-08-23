Hạ tầng giao thông ở hành tinh X gồm $n$ nút giao thông được kết nối bởi $m$ con đường một chiều, hạ tầng giao thông này được đầu tư theo mô hình BOT (Build-Operate-Transfer, có nghĩa: Xây dựng-Vận hành-Chuyển giao).

Để giúp các nhà đầu tư thu hồi vốn, Quốc Vương quyết định cho đặt các BOT thu “giá” trên các tuyến đường. Tuyến đường thứ $i$ đi từ nút giao thông $u_i$ đến nút giao thông $v_i$ sẽ được đặt một BOT thu "giá" với mức phí $c_i$ **($c_i$ là một số nguyên dương không vượt quá $10^9$)**.
Tuy nhiên, để tránh sự than vãn của người dân, Quốc Vương yêu cầu việc đặt các BOT thu "giá" phải thỏa mãn: Với mỗi nút giao thông $u$ thì tổng mức phí trên các con đường xuất phát từ $u$ phải bằng tổng mức phí trên các con đường kết thúc tại $u$.

**Yêu cầu:** Bạn hãy giúp Quốc Vương đặt các BOT thu phí thỏa mãn điều kiện Quốc Vương đưa ra nhé.

## Dữ liệu vào:
- Dòng đầu là hai số $n,m$ lần lượt là số nút giao thông và số con đường;
- $m$ dòng tiếp theo, mỗi dòng gồm hai số $u_i$ và $v_i$, thể hiện con đường thứ $i$ đi từ nút $u_i$ đến nút $v_i\ (1≤u_i,v_i≤n)$;

Đề bài đảm bảo không có hai con đường trùng nhau và con đường đi từ một nút tới chính nó. 

## Dữ liệu ra:
- Dòng đầu ghi `YES` nếu có phương án đặt BOT thỏa yêu cầu bài toán, ngược lại ghi ra `NO`;
- Nếu dòng đầu ghi `YES` thì dòng sau ghi ra $m$ số nguyên dương, số thứ $i$ là mức phí trên con đường thứ $i$.

## Ví dụ:
### Dữ liệu vào:
```
2 2
1 2
2 1
```

### Dữ liệu ra:
```
YES
1 1
```

### Dữ liệu vào:
```
4 3 
1 2 
2 3 
3 4
```

### Dữ liệu ra:
```
NO
```

## Giới hạn:
- Subtask $\#1: 10\%$ số điểm có $1≤n ≤3$;
- Subtask $\#2: 10\%$ số điểm khác có $3< n≤5$;
- Subtask $\#3: 30\%$ số điểm khác có $5< n ≤200$;
- Subtask $\#4: 30\%$ số điểm khác có $200< n≤2000;1≤m≤10^5$;
- Subtask $\#5: 20\%$ số điểm khác có $2000< n≤10^5;1≤m≤ 5×10^5$.