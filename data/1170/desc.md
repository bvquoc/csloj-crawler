**<center>NGUỒN: PVH PreVOI ONLINE 2020 (13 - 14/12/2019)</center>**
<br>

Những bạn đã từng gắn bó với VNOI Online qua nhiều năm hẳn không hề xa lạ với Bắc Ninh – trung tâm xứ Kinh Bắc cổ xưa, cái nôi của làn điệu dân ca quan họ đã được UNESCO công nhận là Di sản văn hoá phi vật thể. Các bạn cũng đã biết con người Bắc Ninh có truyền thống văn hoá, hiếu khách, cần cù và sáng tạo, với những bàn tay khéo léo mang đậm nét dân gian. Các bạn đã được nghe về những chiếc bánh phu thê vàng ươm, được xếp thành cặp như lời chúc phúc cho các đôi tân lang, tân nương trong ngày cưới. Và cuối cùng, các bạn hẳn còn nhớ cặp đôi Liinhh và Trà, những sửu nhi đã gây ra vụ cướp đám cưới đình đám, mà chỉ có những lập trình viên thuật toán khủng mới có thể cứu một đám cưới trong làng khỏi thảm hoạ.

Năm nay, Trà ~18~ tuổi, đã dậy thì xong và là một thiếu nữ xinh đẹp, dịu hiền. Trà đến tuổi lấy chồng và chẳng mấy chốc đã kiếm được cho mình một đấng phu quân hoàn hảo. Để khép lại quá khứ đen tối và vun vén cho cuộc sống hôn nhân, Trà quyết định từ mặt Liinhh và không cho Liinhh tới dự đám cưới, dù hai người từng ngồi cùng lớp suốt ba năm trời. Tức giận trước sự trở mặt của người bạn tốt, Liinhh câu kết với Hà Quang Miinhh, lập mưu tính kế đến dự đám cưới của Trà, quyết thực hiện giã tâm ăn trộm bánh phu thê, như ngày xưa cả hội cùng làm với nhau.

Dưới sự ảnh hưởng của cuộc cách mạng công nghiệp ~4.0~, thành phố Bắc Ninh giờ đây đã thay da đổi thịt. Không như thành phố bên cạnh, nơi có tuyến đường sắt Cát Linh – Hà Đông xây ngót thập kỷ vẫn không xong, Bắc Ninh đã có hệ thống đường sắt văn minh, hiện đại. Thành phố bao gồm ~𝑛~ ga tàu được đánh số từ ~1~ tới ~𝑛~. Các ga tàu được nối với nhau bởi ~𝑚~ tuyến đường sắt một chiều, tuyển thứ ~𝑖~ đi từ ga ~𝑢_𝑖~ tới ga ~𝑣_𝑖~ và có chi phí là ~𝑐_𝑖~. Theo chính sách hiện tại của thành phố, các ga tàu áp dụng mức phí bảo trì hệ thống lần lượt là ~𝑎_1, 𝑎_2, … , 𝑎_𝑛~. Để đi từ ga ~𝑥~ tới ga ~𝑦~, hành khách phải thực hiện một hành trình gồm một chuỗi các chuyến tàu, sao cho chuyến đầu tiên xuất phát tại ~𝑥~, chuyến cuối cùng kết thúc tại ~𝑦~ và điểm xuất phát của chuyến liền sau trùng với điểm kết thúc của chuyến liền trước. Chi phí cho một hành trình bao gồm tổng chi phí của các tuyến đường sắt được sử dụng, cộng thêm phí bảo trì hệ thống nhỏ nhất của một ga tàu đã đi qua. Nói cách khác, để thực hiện một hành trình từ ga 𝑥 tới ga ~𝑦~ với ~𝑘~ chuyến tàu ~𝑖_1, 𝑖_2, … , 𝑖_𝑘~ khách phải trả số tiền là: ~𝑐_{𝑖_1} + 𝑐_{𝑖_2} + ⋯ + 𝑐_{𝑖_𝑘} + \min⁡(𝑎_𝑥, 𝑎_𝑦, 𝑎_{𝑢_{𝑖_1}} , 𝑎_{𝑣_{𝑖_1}} , 𝑎_{𝑢_{𝑖_2}} , 𝑎_{𝑣_{𝑖_2}} , … , 𝑎_{𝑢_{𝑖_𝑘}} , 𝑎_{𝑣_{𝑖_𝑘}})~

Lưu ý rằng trong một hành trình, một chuyến tàu có thể được đi nhiều lần, và bạn phải trả phí cho mỗi lần bạn đi. Phí bảo trì hệ thống của một số ga tàu có thể âm – đây là ý tưởng thu hút  người dân đi tàu của thành phố, bởi số tiền bạn bỏ ra có thể ít hơn tổng chi phí của các chuyến tàu bạn sử dụng.

Trường THPT chuyên Bắc Ninh nằm gần ga tàu ~𝑠~. Để các bạn có thể tới dự đám cưới, Trà muốn tổ chức hôn lễ ở gần một ga tàu ~𝑡~ mà có thể đi bằng tàu từ ga ~𝑠~ tới ga ~𝑡~. Nhưng để gây khó khăn cho Liinhh và Miinh, vì biết đây là hai học sinh nghèo vượt khó, Trà muốn chọn ga ~𝑡~ sao cho chi phí nhỏ nhất cho một hành trình từ ga ~𝑠~ tới ga ~𝑡~ là lớn nhất có thể.

Các bạn hãy giúp Trà bảo vệ sự bình an của đám cưới này, bằng việc chỉ ra cho trà một địa điểm tổ chức đám cưới thích hợp, và một hành trình có chi phí nhỏ nhất để đi từ trường THPT chuyên Bắc Ninh tới đây nhé.

## Dữ liệu vào:
- Dòng đầu tiên chứa ba số nguyên ~𝑛, 𝑚~ và ~𝑠~ ~(1 ≤ 𝑛, 𝑚 ≤ 3 \times 10^5, 1 ≤ 𝑠 ≤ 𝑛)~ là số ga tàu trong thành phố, số tuyến đường sắt và ga tàu nằm gần trường THPT chuyên Bắc Ninh.
- Dòng thứ hai chứa ~𝑛~ số nguyên ~𝑎_1, 𝑎_2, … , 𝑎_𝑛~ ~(−10^9 ≤ 𝑎_𝑖 ≤ 10^9)~ là phí bảo trì hệ thống của ~𝑛~ ga tàu.
- Trong ~𝑚~ dòng cuối, dòng thứ ~𝑖~ chứa ba số nguyên ~𝑢_𝑖, 𝑣_𝑖~ và ~𝑐_𝑖~ ~(1 ≤ 𝑢_𝑖, 𝑣_𝑖 ≤ 𝑛, 1 ≤ 𝑐_𝑖 ≤ 10^9)~ là ga xuất phát, ga kết thúc và chi phí của chuyến tàu thứ ~𝑖~.

## Dữ liệu ra:
- Dòng đầu tiên chứa hai số nguyên ~𝑑~ và ~𝑡~ ~(1 ≤ 𝑡 ≤ 𝑛)~, trong đó ~𝑡~ là ga tàu mà Trà nên tổ chức đám cưới gần đó và ~𝑑~ là chi phí nhỏ nhất để di chuyển bằng tàu từ ga ~𝑠~ tới ga ~𝑡~.
- Dòng thứ hai chứa số nguyên không âm ~𝑘~ là số chuyến tàu trên hành trình từ ga ~𝑠~ tới ga ~𝑡~ với chi phí nhỏ nhất.
- Dòng thứ ba chứa ~𝑘~ số nguyên dương ~𝑖_1, 𝑖_2 … , 𝑖_𝑘~ ~(1 ≤ 𝑖_𝑗 ≤ 𝑚)~ là chỉ số của các chuyến tàu trên hành trình.
Nếu có nhiều đáp án tối ưu, bạn có thể in ra phương án bất kì.

## Giới hạn:
- **Subtask** ~\#1~ ~(20\%\text{ số điểm}): 0 ≤ 𝑎_𝑖 ≤ 10~ 
- **Subtask** ~\#2~ ~(20\%\text{ số điểm}): 𝑛, 𝑚 ≤ 2000~
- **Subtask** ~\#3~ ~(60\%\text{ số điểm}):~ ⁡Không có ràng buộc gì thêm

## Ví dụ:
#### Dữ liệu vào:
```
4 4 1
10 0 20 30
1 2 7
1 3 4
2 4 8
3 4 6
```

#### Dữ liệu ra:
```
15 4
2
1 3
```

#### Dữ liệu vào:
```
5 7 3
1 2 -4 -8 16
2 4 10
4 3 7
1 5 2
2 3 1
5 2 10
1 2 5
5 4 3
```

#### Dữ liệu ra:
```
-4 3
0
```

#### Giải thích:
<center><img src="/images/problems/1170/railway.png" width=400px></center>

- Trong ví dụ thứ nhất (hình minh hoạ):
    - Hành trình màu xanh đi qua các ga ~1, 2, 4~ nên có chi phí là ~7 + 8 + \min(𝑎_1, 𝑎_2, 𝑎_4) = 15~ 
    - Hành trình màu đỏ đi qua các ga ~1, 3, 4~ nên có chi phí là ~4 + 6 + \min(𝑎_1, 𝑎_3, 𝑎_4) = 20~
    - Chi phí nhỏ nhất để đi từ ga ~1~ tới ga ~2~ là ~7~ 
    - Chi phí nhỏ nhất để đi từ ga ~1~ tới ga ~3~ là ~14~
    - Chi phí nhỏ nhất để đi từ ga ~1~ tới ga ~4~ là ~15~
    Vậy Trà nên chọn ga 4 để tổ chức đám cưới. 

- Trong ví dụ thứ hai, từ trường THPT chuyên Bắc Ninh (ga ~3~) không tới được bất kì ga nào khác. Do đó, Trà phải tổ chức đám cưới ở gần ga này.
    - Hành trình để đi tàu từ ga ~3~ tới ga ~3~ không chứa chuyến tàu nào, nhưng vẫn chứa ga ~3~, nên có tổng chi phí là ~𝑎_3 = −4~