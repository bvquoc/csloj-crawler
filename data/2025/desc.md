**<center>Nguồn:  Free Contest 04</center>**

Đàn bò của nông dân John đang luyện tập cho một cuộc chạy vượt rào sắp diễn ra. Nông trại của John có ~N~ cánh đồng và ~M~ con đường ~(0 < N ≤ 300, 0 < M ≤ 25000)~, mỗi con đường được kí hiệu bởi hai chỉ số ~P~ và ~Q~ mô tả một đường đi một chiều từ ~P~ đến ~Q\ (0 < P,Q ≤ N)~. Ngoài ra, trên mỗi con đường, nông dân John đặt ~1~ chướng ngại vật độ cao ~H\ (0 < H ≤ 10^6)~.

Lũ bò sẽ tập chạy trong ~T~ vòng ~(0 < T ≤ 40000)~, mỗi vòng chúng sẽ chạy từ đồng cỏ ~A_i~ đến ~B_i~ ~(0 < A_i, B_i ≤ N, A_i ≠ B_i)~. Do chúng rất lười biếng nên chúng sẽ chọn con đường mà độ cao của chướng ngại vật cao nhất cần phải vượt qua là thấp nhất. Nói cách khác, nếu gọi ~x~ là kết quả 
của lượt chạy này, không có chướng ngại vật nào trên đường chạy này có độ cao lớn hơn ~x~.

Hãy giúp lũ bò chọn ra đường chạy tối ưu.

## Dữ liệu vào:
- Dòng đầu tiên chứa ba số nguyên ~N, M~ và ~T~;
- ~M~ dòng tiếp theo, mỗi dòng chứa ba số nguyên ~P, Q, H~ mô tả một con đường tương ứng;
- ~T~ dòng tiếp theo, mỗi dòng chứa hai số nguyên ~A_i~ và ~B_i~.

## Dữ liệu ra:
- Đưa ra ~T~ dòng là độ cao của đường chạy tối ưu trong vòng chạy tương ứng, hoặc ~-1~ trong trường hợp không có đường đi từ ~A_i~ đến ~B_i~.

## Ví dụ:
#### Dữ liệu vào:
```
5 6 3
1 2 12
3 2 8
1 3 5
2 5 3
3 4 4
2 4 8
3 4
1 2
5 1
```

#### Dữ liệu ra:
```
4
8
-1
```
