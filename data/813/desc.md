**<center>NGUỒN: TRẠI HÈ HÙNG VƯƠNG LẦN THỨ XIV (PHÚ THỌ 2018)</center>**
<br>

Bên lề của Trại hè Hùng Vương năm nay Ban Tổ chức còn đưa vào môn thi đấu vật đồng đội. Mỗi trường cử ra một đội gồm ~n~ đô vật đấu với đội của trường khác. Cứ ~2~ người, mỗi người ở một trường đấu với nhau. Để tiết kiệm thời gian cả ~n~ cặp cùng đấu một lúc trên ~n~ sàn. Các sàn đấu được bố trí thành một vòng tròn trên sân vận động.
<center><img src="/images/problems/813/wrestling.png" width=300px title="Minh họa sân đấu vật"></center>

Vào chung kết là các đội của  hai trường ~A~ và trường chủ nhà ~B~. Hai trường này đã gặp nhau ở một hội thi khác, khi đó người thứ ~i~ của trường ~A~ đã gặp người thứ ~i~ của trường ~B~. Danh sách xếp hàng được máy tính đưa ra một cách ngẫu nhiên, với trường ~A~ là ~a_1,a_2,...,a_n~ , trong đó ~1≤a_i≤n~, các ~a_i~ nguyên và khác nhau từng đôi một, ~i=1÷n~, với trường ~B~ là danh sách ~b_1,b_2,...,b_n~, các số ~b_i~ cũng có tính chất như ~a_i~ với mọi ~i~. Các bạn ở đội ~B~ có quyết tâm rất cao, xem kỹ băng hình lần gặp trước với đội ~A~, phân tích kỹ chiến lược và chiến thuật của phía bạn. Ai cũng khao khát được gặp lại chính đối thủ cũ của mình, nhưng trình tự xếp hàng đã cố định. 
Theo truyền thống, mỗi đội sẽ chạy quanh sân theo chiều kim đồng hồ chào khán giả rồi mới lên sàn. Các sàn được đánh số từ ~1~ đến ~n~ theo chiều ngược kim đồng hồ. Đội ~A~ ra sân trước,  ở sàn thứ ~i~ là bạn ~a_i~ của trường ~A~. Sau khi các đối thủ đã lên sàn, đội ~B~ ra sân. Đội chủ nhà bao giờ cũng được khán giả đón tiếp nồng nhiệt. Bạn dẫn đầu đưa ra một ý tưởng được mọi người rất hoan nghênh: Thay vì chạy đúng một vòng bạn đó có thể dẫn đội chạy quá thêm vài sàn đấu rồi mới dừng lại để mỗi người lên sàn đấu cạnh mình đang đứng, như vậy vẫn không phạm luật!
Ví dụ, ~n=5~, danh sách xếp hàng đội ~A~ là ~(1, 3, 5, 2, 4)~ và của đội ~B~ là ~(2, 5, 4, 1, 3)~.
 <center><img src="/images/problems/813/wrestling.svg" width = 800px></center>
 <center><b>Hình minh họa</b></center>

**Yêu cầu**: Hãy xác định bạn dẫn đầu cần chạy thêm mấy sàn đấu để có nhiều bạn gặp được đối thủ cũ nhất. Số sàn có thể chạy thêm trong phạm vi từ ~0~ đến ~n-1~. Nếu có nhiều cách cùng đạt được kết quả nhiều nhất thì chọn cách phải chạy thêm ít nhất. 

## Dữ liệu vào:
- Dòng đầu tiên chứa một số nguyên ~n\ (1≤n≤5×10^5)~;
- Dòng thứ hai chứa ~n~ số nguyên ~a_1,a_2,...,a_n~;
- Dòng thứ ba chứa ~n~ số nguyên ~b_1,b_2,...,b_n~.
Các số ~a_i,b_i~ với mọi ~i~ thỏa mãn điều kiện đã nêu. Hai số liên tiếp trên cùng dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra trên một dòng hai số nguyên xác định số sàn đấu cần chạy thêm và số người nhiều nhất gặp lại được đối thủ cũ. Các số ghi cách nhau một dấu cách.

## Ví dụ:
#### Dữ liệu vào:
```
5
1 3 5 2 4
2 5 4 1 3
```

#### Dữ liệu ra:
```
3 3
```

## Giới hạn:
- Có ~10\%~ số test ứng với ~10\%~ số điểm có ~n\le 10~;
- Có ~40\%~ số test khác ứng với ~40\%~ số điểm có ~n\le 5000~;
- Có ~30\%~ số test khác ứng với ~30\%~ số điểm có ~n\le 10^4~;
- Có ~20\%~ số test còn lại ứng với ~20\%~ số điểm có ~n\le 5\times 10^5~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)