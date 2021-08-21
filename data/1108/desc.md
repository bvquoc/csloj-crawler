<!--
**<center>NGUỒN: VOI Training Camp 3H (Ngày 01/11/2016)</center>**
-->

Trên mặt phẳng tọa độ người ta kẻ hai đường thẳng song song với trục hoành. Trên đường thẳng thứ nhất chọn ra ~n~ điểm có tọa độ hoành độ phân biệt và trên đường thẳng thứ hai cũng chọn ra ~n~ điểm có hoành độ phân biệt. 
Kẻ ~n~ đoạn thẳng, mỗi đoạn thẳng nối một điểm đã chọn trên đường thẳng thứ nhất với một điểm đã chọn trên đường thẳng thứ hai. Không có điểm nào trên cả hai đường cùng thuộc vào hai đoạn thẳng khác nhau.
Hỏi rằng có bao nhiêu cặp đoạn thẳng cắt nhau?

## Dữ liệu vào:
- Dòng thứ nhất chứa số nguyên dương ~n~. 
- Trong ~n~ dòng tiếp theo, mỗi dòng chứa hai số nguyên ~u_i,v_i~ thể hiện có một đoạn thẳng nối một điểm có hoành độ ~u_i~ trên đường thẳng thứ nhất với một điểm có hoành độ ~v_i~ trên đường thẳng thứ hai. Tất cả các giá trị ~u_1,u_2,…,u_n~ khác nhau đôi một và các giá trị ~v_1,v_2,…,v_n~ khác nhau đôi một.

## Dữ liệu ra:
- Ghi ra trên một dòng một số nguyên duy nhất là số lượng các đoạn thẳng cắt nhau

## Ví dụ:
#### Dữ liệu vào:
```
4
5 12
10 11
11 9
30 1
```

#### Dữ liệu ra:
```
6
```

## Giới hạn:
- Subtask #~1~:  ~30\%~ số điểm có ~1≤n≤5000,0≤u_i,v_i≤10^9~
- Subtask #~2~:	~40\%~ số điểm có ~1≤n,u_i,v_i≤10^5~ 
- Subtask #~3~:	~30\%~ số điểm có ~1≤n≤10^5,0≤u_i,v_i≤10^9~