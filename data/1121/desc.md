<!--
**<center>NGUỒN: Ôn HN tháng 11/2017, Đỗ Đức Đông, Ngày 1</center>**
-->

Một đoạn đường `AB` có độ dài ~𝑙~. Có ~𝑛~ người xuất phát từ điểm `A` và đi đến điểm `B`. Người thứ ~𝑖~ xuất phát vào thời điểm ~𝑡_𝑖~ và đi với vận tốc ~𝑣_𝑖~. Giả sử rằng không có hai người nào cùng xuất phát tại cùng một thời điểm và cũng không có hai người nào đến đích cùng một thời điểm.

Người thứ ~𝑖~ và người thứ ~𝑗~ sẽ gặp nhau trên đường và sẽ kết bạn với nhau, cụ thể người thứ ~𝑖~ và người thứ ~𝑗~ sẽ kết bạn với nhau nếu ~𝑡_𝑖 < 𝑡_𝑗~ và ~t_i+\frac{𝑙}{𝑣_𝑖} > 𝑡_𝑗+\frac{𝑙}{v_j}~. 

**Yêu cầu**: Tìm một nhóm bạn lớn nhất mà hai người trong nhóm đều là bạn của nhau.

## Dữ liệu vào:
- Dòng đầu gồm hai số ~𝑙, 𝑛\ (𝑙 ≤ 10^9; 𝑛 ≤ 10^5)~ 
- ~𝑛~ dòng tiếp theo, mỗi dòng mô tả thông tin của người thứ ~𝑖~ gồm hai số ~𝑡_𝑖, 𝑣_𝑖~. 

## Dữ liệu ra:
- Gồm một số là số bạn trong nhóm tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
1000 4
1 3
2 1
0 2
3 4
```

#### Dữ liệu ra:
```
3
```