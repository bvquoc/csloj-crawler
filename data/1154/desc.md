**<center>NGUỒN: Contest CSL 2017-2018 Lần 2 (Tháng 1/2018) Day 2</center>**
<br>

Tây bắc Si bê ri là vùng khai thác dầu mỏ quan trọng của nước Nga. Trữ lượng khai thác hàng năm đạt tới 267 triệu tấn dầu thô. Dầu thô được vận chuyển theo mạng lưới đường ống có tổng chiều dài lớn hơn đường xích đạo. Có $n$ trạm điều áp đánh số từ $1$ đến $n$ và $m$ đường ống dẫn dầu. Mỗi đường ống nối hai trạm và giữa hai trạm có không quá một đường ống, mỗi trạm gắn ít nhất với một đường ống. Chất lượng hoạt động của các trạm phụ thuộc rất nhiều vào hệ số nhớt của dầu thô. Vì vậy Công ty quản lý khai thác và vận chuyển đặt hàng cho Viện nghiên cứu Dầu mỏ chế tạo các bộ cảm biến độ chính xác cao lắp ở một số trạm để kiểm soát độ nhớt của dầu được chuyển tải qua đường ống. Các trạm phải được chọn sao cho ở đầu hoặc cuối mỗi đường ống đều có bộ cảm biến đo độ nhớt. Các bộ cảm biến này rất đắt tiền vì vậy Công ty chỉ đặt hàng làm $k$ bộ.
<center><img src="/images/problems/1154/pipeline.svg" width=250px></center>

**Yêu cầu**: Cho $n, m, k$ và các cặp $(u_i, v_i)$ xác định đường ống thứ $i$ nối trạm $u_i$ với trạm $v_i$ $(k ≤ n ≤ 2000, 1 ≤ m ≤ 10^5, 1 ≤ k ≤ 40, 1 ≤ u_i, v_i ≤ n, ui ≠ vi, i = 1 ÷ m)$. Hãy xác định xem có cách gắn các bộ cảm biến thỏa mãn yêu cầu đã nêu hay không và đưa ra câu trả lời `YES` hoặc `NO`. Nếu có cách đặt thì chỉ ra một phương án cho biết cần đặt ở những trạm nào.

## Dữ liệu vào:
- Dòng đầu tiên chứa ba số nguyên $n, m$ và $k$;
- Mỗi dòng trong $m$ dòng sau chứa hai số nguyên $u$ và $v$.

## Dữ liệu ra:
- Dòng đầu tiên chứa thông báo `YES` hoặc `NO`;
- Nếu kết quả là `YES` thì dòng thứ hai chứa `k` số nguyên cho biết các trạm cần đặt bộ cảm biến, các số đưa ra theo thứ tự tăng dần.

## Ví dụ:
#### Dữ liệu vào:
```
7 6 2
1 2
1 3
1 4
2 5
2 6
2 7
```

#### Dữ liệu ra:
```
YES
12
```

## Giới hạn:
- $10\%$ số test có $𝑛 ≤ 20$ 
- $50\%$ số test khác có $𝑛, 𝑚 ≤ 100, 𝑘 ≤ 10$